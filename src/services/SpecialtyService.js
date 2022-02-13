const db = require("../models")

let createSpecialty = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.name || !data.imageBase64 || !data.contentMarkdown || !data.contentHTML) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })
            } else {
                await db.Specialty.create({
                    name: data.name,
                    image: data.imageBase64,
                    contentHTML: data.contentHTML,
                    contentMarkdown: data.contentMarkdown
                })

                resolve({
                    errCode: 0,
                    errMessage: 'OK'
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}

let getAllSpecialty = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Specialty.findAll();
            if (data && data.length > 0) {
                data.map(item => {
                    item.image = Buffer.from(item.image, 'base64').toString('binary');
                    return item;
                })
            }
            resolve({
                errCode: 0,
                errMessage: 'OK',
                data
            })
        } catch (error) {
            reject(error)
        }
    })
}

let getDetailSpecialtyById = (id, location) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id || !location) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })
            } else {
                let data = await db.Specialty.findOne({
                    where: { id: id },
                    attributes: ['contentHTML', 'contentMarkdown'],
                })
                if (data) {
                    let doctorSpecialty = {}
                    if (location === 'ALL') {
                        doctorSpecialty = await db.Doctor_info.findAll({
                            where: { specialtyId: id },
                            attributes: ['doctorId', 'provinceId'],
                        })
                    } else {
                        doctorSpecialty = await db.Doctor_info.findAll({
                            where: {
                                specialtyId: id,
                                provinceId: location
                            },
                            attributes: ['doctorId', 'provinceId'],
                        })
                    }
                    data.doctorSpecialty = doctorSpecialty
                } else {
                    data = {}
                }
                resolve({
                    errCode: 0,
                    errMessage: 'OK',
                    data
                })
            }

        } catch (error) {
            reject(error)
        }
    })
}


module.exports = {
    createSpecialty,
    getAllSpecialty,
    getDetailSpecialtyById
}