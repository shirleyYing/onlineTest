// var moke = require('moke');


var data = {};
data.paper_test = [{
    paper_name: "高等数学",
    paper_type: "自主练习",
    paper_id: 1,
    need_time: 60
}, {
    paper_name: "c++程序设计",
    paper_type: '作业练习',
    paper_id: 2,
    need_time: 60,
    end_time: '2016-5-20'
}, {
    paper_name: "c语言程序设计",
    paper_type: '作业练习',
    paper_id: 3,
    need_time: 60,
    end_time: '2016-5-20'

}, {
    paper_name: "数据结构",
    paper_type: '自主练习',
    paper_id: 4,
    need_time: 60
},  ];

data.special_test = [{
    course_name: "高等数学",
    question_number: 100,
    course_id: 1
}, {
    course_name: "数据结构",
    question_number: 100,
    course_id: 2
}, {
    course_name: "c++程序设计",
    question_number: 100,
    course_id: 3
}, {
    course_name: "c语言程序设计",
    question_number: 100,
    course_id: 4
}];

data.query_score = [{
    paper_name: "c语言程序设计",
    score: 100,
    paper_type: '自主练习',
    complete_time: "2016-5-3",
    paper_id: 1
}, {
    paper_name: "c++程序设计",
    score: 100,
    paper_type: '自主练习',
    complete_time: "2016-5-3",
    paper_id: 12
},{
    paper_name: "高等数学",
    score: 100,
    paper_type: '自主练习',
    complete_time: "2016-5-3",
    paper_id: 14
}];

data.question_in_paper = [{
    question_type: "单选",
    order_id: 1,
    paper_id: 1,
    question_id: 1,
    question_name: "print()函数是一个类的常成员函数，它无返回值，下列表示中正确的是()",
    choice: ["const void print();", "const void print();", "const void print();", "const void print();"]

}, {
    question_type: "多选",
    order_id: 2,
    question_id: 2,
    paper_id: 1,

    question_name: "print()函数是一个类的常成员函数，它无返回值，下列表示中正确的是()",
    choice: ["const void print();", "const void print();", "const void print();", "const void print();"]
}, {
    question_type: "填空",
    order_id: 3,
    question_id: 3,
    paper_id: 1,

    question_name: "print()函数是一个类的常成员函数，它无返回值，正确的表示方法是："
}, {
    question_type: "简答",
    order_id: 4,
    question_id: 4,
    paper_id: 1,

    question_name: "简要回答XXX："
}, {
    question_type: "单选",
    order_id: 5,
    paper_id: 1,

    question_id: 5,
    question_name: "print()函数是一个类的常成员函数，它无返回值，下列表示中正确的是()",
    choice: ["const void print();", "const void print();", "const void print();", "const void print();"]

}, ];
// 学生展示试卷每道题对错
data.question_paper_detail = {
    paper: {
        paper_name: 'c语言程序设计',
        score: 90
    },
    questions: [{
            true_or_false: true,
            question_type: '单选',
            question_name: "print()函数是一个类的常成员函数，它无返回值，下列表示中正确的是()",
            choice: ["const void print();", "const void print();", "const void print();", "const void print();"],
            answer: "a",
            student_answer: "b",
            question_score: 3,
            student_score: 3
        }, {
            true_or_false: false,
            question_type: '多选',
            question_name: "print()函数是一个类的常成员函数，它无返回值，下列表示中正确的是()",
            choice: ["const void print();", "const void print();", "const void print();", "const void print();"],
            answer: "ac",
            student_answer: "ab",
            question_score: 3,
            student_score: 0

        }, {
            true_or_false: false,
            question_type: '判断',
            question_name: "string 是基础数据类型",
            choice: ["对", "错"],
            answer: "对",
            student_answer: "错",
            question_score: 3,
            student_score: 0

        }, {
            true_or_false: true,
            question_type: '简答',
            question_name: "javascript的基础数据类型有",
            choice: [],
            answer: "number,string,boolean",
            student_answer: "number,string,booleannumber,string,booleannumber,string,booleannumber,string,booleannumber,string,booleannumber,string,booleannumber,string,booleannumber,string,booleannumber,string,booleannumber,string,booleannumber,string,booleannumber,string,booleannumber,string,booleannumber,string,boolean",
            question_score: 3,
            student_score: 3

        }, {
            true_or_false: true,
            question_type: '填空',
            question_name: "javascript的基础数据类型有",
            choice: [],
            answer: "number,string,boolean",
            student_answer: "number,string,boolean",
            question_score: 3,
            student_score: 3

        }

    ]
};
//教师 试题库管理data
data.teacher_question = {
    courses: ['c语言程序设计', "c++程序设计"],
    questions: [{
        title: 'print()函数是一个类的常成员函数，它无返回值，下列表示中正确的是()',
        question_type: '单选',
        knowledge_point: 'c++程序设计',
        difficulty_level: 1,
        answer: 'a',
        uploader: '030001',
        choice: ["const void print();", "const void print();", "const void print();", "const void print();"],
        upload_time: '2016-5-20',
        memo: '',
        id: 1
    }, {
        title: '能在1024的windows机器上显示8列而在肾6手机上显示12列的是能在1024的windows机器上显示8列而在肾6手机上显示12列的是',
        question_type: '多选',
        knowledge_point: 'c语言程序设计',
        difficulty_level: 1,
        answer: 'ab',
        uploader: '030001',
        choice: ["const void print();", "const void print();", "const void print();", "const void print();"],
        upload_time: '2016-5-20',
        memo: '',
        id: 2

    }, {
        title: '能在1024的windows机器上显示8列而在肾6手机上显示12列的是能在1024的windows机器上显示8列而在肾6手机上显示12列的是',
        question_type: '多选',
        knowledge_point: 'c语言程序设计',
        difficulty_level: 1,
        answer: 'ab',
        uploader: '030001',
        choice: ["const void print();", "const void print();", "const void print();", "const void print();"],
        upload_time: '2016-5-20',
        memo: '',
        id: 3
    }]
};

//教师 试卷管理data

data.teacher_paper = {
    courses: ['c语言程序设计', "c++程序设计"],
    papers: [{
        paper_id: 1,
        paper_name: 'c语言程序设计221',
        paper_type: '1', // 0: self-exercise 1: teacher-test
        question_number: 5, // 试题数
        uploader: '',
        course_name: 'c语言程序设计',
        upload_time: '2016-5-10',
        start_time: '2016-5-20',
        end_time: '2016-5-30',
        need_time: 60,
        total_score: 100
    }, {
        paper_id: 2,
        paper_name: 'c语言程序设计222c语言程序设计222c语言程序设计222c语言程序设计222',
        paper_type: '1', // 0: self-exercise 1: teacher-test
        question_number: 5, // 试题数
        uploader: '',
        course_name: 'c语言程序设计',
        upload_time: '2016-5-10',
        start_time: '2016-5-20',
        end_time: '2016-5-30',
        need_time: 60,
        total_score: 100
    }, {
        paper_id: 3,
        paper_name: 'c++程序设计111',
        paper_type: '1', // 0: self-exercise 1: teacher-test
        question_number: 5, // 试题数
        uploader: '',
        course_name: 'c++程序设计',
        upload_time: '2016-5-10',
        start_time: '2016-5-20',
        end_time: '2016-5-30',
        need_time: 60,
        total_score: 100
    }, ]
};

// 试卷添加试题时题目展示

data.teacher_question_add_to_paper = [{
    title: 'print()函数是一个类的常成员函数，它无返回值，下列表示中正确的是()',
    question_type: '单选',
    knowledge_point: 'c++程序设计',
    difficulty_level: 1,
    answer: 'const void print();',
    uploader: '030001',
    choice: ["const void print();", "const void print();", "const void print();", "const void print();"],
    upload_time: '2016-5-20',
    memo: '',
    id: 1
}, {
    title: '能在1024的windows机器上显示8列而在肾6手机上显示12列的是能在1024的windows机器上显示8列而在肾6手机上显示12列的是',
    question_type: '多选',
    knowledge_point: 'c语言程序设计',
    difficulty_level: 1,
    answer: 'const void print();const void print();const void print();',
    uploader: '030001',
    choice: ["const void print();", "const void print();", "const void print();", "const void print();"],
    upload_time: '2016-5-20',
    memo: '',
    id: 2

}, {
    title: '能在1024的windows机器上显示8列而在肾6手机上显示12列的是能在1024的windows机器上显示8列而在肾6手机上显示12列的是',
    question_type: '多选',
    knowledge_point: 'c语言程序设计',
    difficulty_level: 1,
    answer: 'const void print();',
    uploader: '030001',
    choice: ["const void print();", "const void print();", "const void print();", "const void print();"],
    upload_time: '2016-5-20',
    memo: '',
    id: 3
}];
//教师修改试卷
data.teacher_modify_paper = {
    paper_info: {
        title: "c语言程序设计",
        paper_type: "作业练习",
        paper_name: 'c语言程序设计',
        paper_type: '0', // 0: self-exercise 1: teacher-test
        question_number: 3, // 试题数
        uploader: '',
        course_name: 'c语言程序设计',
        upload_time: '',
        start_time: '2016-5-10',
        end_time: '2016-5-20',
        need_time: '60',
        total_score: 9
    },
    questions: [{
        title: 'print()函数是一个类的常成员函数，它无返回值，下列表示中正确的是()',
        question_type: '单选',
        knowledge_point: 'c++程序设计',
        difficulty_level: 1,
        answer: 'const void print();',
        uploader: '030001',
        choice: ["const void print();", "const void print();", "const void print();", "const void print();"],
        upload_time: '2016-5-20',
        memo: '',
        id: 1
    }, {
        title: '能在1024的windows机器上显示8列而在肾6手机上显示12列的是能在1024的windows机器上显示8列而在肾6手机上显示12列的是',
        question_type: '多选',
        knowledge_point: 'c语言程序设计',
        difficulty_level: 1,
        answer: 'const void print();const void print();const void print();',
        uploader: '030001',
        choice: ["const void print();", "const void print();", "const void print();", "const void print();"],
        upload_time: '2016-5-20',
        memo: '',
        id: 2

    }, {
        title: '能在1024的windows机器上显示8列而在肾6手机上显示12列的是能在1024的windows机器上显示8列而在肾6手机上显示12列的是',
        question_type: '多选',
        knowledge_point: 'c语言程序设计',
        difficulty_level: 1,
        answer: 'const void print();',
        uploader: '030001',
        choice: ["const void print();", "const void print();", "const void print();", "const void print();"],
        upload_time: '2016-5-20',
        memo: '',
        id: 3
    }]
};
//一张试卷中的要改的题目
data.teacher_correct_question = [{
    question: {
        question_name: "print()函数是一个类的常成员函数，它无返回值,请简要回答",
        question_score: 10
    },
    student_answer: [{
        student_id: '2012211119',
        answer: 'print()函数是一个类的常成员函数print()函数是一个类的常成员函数print()函数是一个类的常成员函数'
    },{
        student_id: '2012211119',
        answer: 'print()函数是一个类的常成员函数print()函数是一个类的常成员函数print()函数是一个类的常成员函数'
    },{
        student_id: '2012211119',
        answer: 'print()函数是一个类的常成员函数print()函数是一个类的常成员函数print()函数是一个类的常成员函数'
    },{
        student_id: '2012211119',
        answer: 'print()函数是一个类的常成员函数print()函数是一个类的常成员函数print()函数是一个类的常成员函数'
    }]
}];

//待改试卷列表

data.teacher_correct_paper = [{
    paper_name: 'c语言程序设计',
    jxb:'A03122308'
},{
    paper_name: 'c语言程序设计',
    jxb:'A03122308'
},{
    paper_name: 'c语言程序设计',
    jxb:'A03122308'
},{
    paper_name: 'c语言程序设计',
    jxb:'A03122308'
},];

module.exports = data;