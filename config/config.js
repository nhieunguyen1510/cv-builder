var di = require("di4js");
var mysqlmodel = require('../helper/mysql-model');
var db = require("../model/db");
var user = require('../model/user');
var cv = require('../model/cv');

var user_service = require('../service/user');
var admin_service = require('../service/admin');
var cv_service = require('../service/cv');
var certification_service = require('../service/certification');
var education_service = require('../service/education');
var contact_info_service = require('../service/contact_info');
var curriculum_vitae_service = require('../service/cv');
var exp_service = require('../service/experience');
var sum_service = require('../service/summary');
var skill_service = require('../service/skill');
var project_service = require('../service/project');
var cv_section_service = require('../service/cv_section');
var login_service = require('../service/login');
var account_service = require('../service/account');
di
    .register('db')
    .as(db)
    .withConstructor()
    .param().val("localhost")
    .param().val("root")
    .param().val("root")
    .param().val("cv_builder")
    .param().val(mysqlmodel)
    .register('user')
    .instance(user)
    .register('admin')
    .instance(admin_service)
    .register('certification')
    .instance(certification_service)
    .register('education')
    .instance(education_service)
    .register('contact_info')
    .instance(contact_info_service)
    .register('experience')
    .instance(exp_service)
    .register('summary')
    .instance(sum_service)
    .register('skill')
    .instance(skill_service)
    .register('curriculum_vitae')
    .instance(curriculum_vitae_service)
    .register('project')
    .instance(project_service)
    .register('cv_section')
    .instance(cv_section_service)
    .register('login_service')
    .instance(login_service)
    .register('account_service')
    .instance(account_service);

module.exports = di;
