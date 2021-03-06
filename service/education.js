var educationModel = require('../model/education');

function education_service() {

    this.getAllByIdCV = function (param, callback) {
        var education_getall = new educationModel();
        education_getall.getAllByIdCV(param, callback);
    }

    this.createEducation = function (param, callback) {
        var education_create = new educationModel(param.Institude, param.Degree, param.FromDate, param.ToDate, param.Details, param.CV_Id);
        var valid = education_create.checkValidation();
        if (valid) {
            education_create.save(education_create.attribute, callback);
        } else {
            callback(0, education_create.attrvalidate);
        }
    }

    this.updateEducation = function (param, callback) {
        var education_save = new educationModel(param.Institude, param.Degree, param.FromDate, param.ToDate, param.Details, param.CV_Id);
        var valid = education_save.checkValidation();
        if (valid) {
            education_save.update(param.Id, callback);
        } else {
            callback(0, education_save.attrvalidate);
        }
    }
    
    this.deleteEducation = function (param, callback) {
        var education_delete = new educationModel();
        education_delete.remove(param,callback);
    }
    
    this.getAllEducationByCVId = function (param, cb) {
        var c = new educationModel();
        c.getAllEducationByCVId(param, cb);
    }
}

module.exports = education_service;