import { defineStore } from "pinia";

export class Quiz {
    constructor(questionId = "", question = "", answers = [new Answer()], canSelectMultiple = false) {
        this.questionId = questionId;
        this.question = question;
        if (!Array.isArray(answers) || !answers.every((answer) => answer instanceof Answer)) {
            console.log(this, "not an array of Answer");
            return;
        }
        this.answers = answers;
        this.canSelectMultiple = canSelectMultiple;
    }

    get isAnsweredCorrectly() {
        if (this.answers.every(value => value.isCorrectAnswer === value.isSelected)) return true;
        return false;
    }
    
    get isAnswered() {
        if (this.answers.every(value => !value.isSelected)) return false;
        return true;
    }

    fromJson(json) {
        let _answers = [new Answer()];
        _answers = copyArray(json["answers"], Answer.prototype.fromJson);
        return new Quiz(json["questionId"], json["question"], _answers, json["canSelectMultiple"]);
    }
}

export class Answer {
    constructor(answerId = "", answer = "", isSelected = false, isCorrectAnswer = false) {
        this.answerId = answerId;
        this.answer = answer;
        this.isSelected = isSelected;
        this.isCorrectAnswer = isCorrectAnswer;
    }

    fromJson(json) {
        return new Answer(json["answerId"], json["answer"], json["isSelected"], json["isCorrectAnswer"]);
    }
}

const _quiz = [
    new Quiz(
        "1",
        "In what countries have I lived?", 
        [
            new Answer("1", "England", false),
            new Answer("2", "Australia", false),
            new Answer("3", "United States", false, true),
            new Answer("4", "China", false),
            new Answer("5", "Canada", false, true),
        ],
        true,
    ),
    new Quiz(
        "2",
        "What is my job?", 
        [
            new Answer("1", "Lawyer", false),
            new Answer("2", "Developer", false, true),
            new Answer("3", "English Teacher", false),
            new Answer("4", "Unemployed", false),
            new Answer("5", "Therapist", false),
        ],
        false,
    ),
    new Quiz(
        "3",
        "When is my birthday?", 
        [
            new Answer("1", "05.06", false, true),
            new Answer("2", "06.05", false),
            new Answer("3", "05.16", false),
            new Answer("4", "09.05", false),
            new Answer("5", "04.20", false),
        ],
        false,
    ),
    new Quiz(
        "4",
        "What is(are) my dog(s)' name?", 
        [
            new Answer("1", "Queens", false, true),
            new Answer("2", "Sadness", false),
            new Answer("3", "Happy", false, true),
            new Answer("4", "Luna", false, true),
            new Answer("5", "Mig", false),
        ],
        true,
    ),
];

/// 이렇게 안하고 그냥 JSON.parse(JSON.stringify(array)) 만 하면 Quiz인지 인식 못함 
const copyArray = (array, fromJson) => {
    let _arr = [];
    array = JSON.parse(JSON.stringify(array)); /// deep copy 
    for (let i = 0; i < array.length; i++) {
        const _new = fromJson(array[i]);
        _arr.push(_new);
    }
    return _arr;
}

export const quizStore = defineStore("quiz", {
    state: () => ({ 
        /// quiz: [new Quiz()]
        currentIndex: 0,
        mode: "quiz",
        quiz: copyArray(_quiz, Quiz.prototype.fromJson),
        score: 0,
    }),
    actions: {
        _currentQuestion() { return this.myQuiz[this.currentIndex]; },
        _onClickAnswer(answerId) {
            const _index = this._currentQuestion().answers.findIndex((value) => value.answerId === answerId);
            this._currentQuestion().answers[_index].isSelected = !this._currentQuestion().answers[_index].isSelected;
        },
        onClickCheckBox(answerId) {
            this._onClickAnswer(answerId);
        },
        onClickRadioButton(answerId) {
            const _previouslySelectedIndex = this._currentQuestion().answers.findIndex((value) => value.isSelected);
            if (_previouslySelectedIndex !== -1) this._currentQuestion().answers[_previouslySelectedIndex].isSelected = false;
            this._onClickAnswer(answerId);
        },
        onClickArrow(isLeft) {
            if (isLeft) this.currentIndex--;
            if (!isLeft) this.currentIndex++;
        },
        resetQuiz() {
            this.quiz = copyArray(_quiz, Quiz.prototype.fromJson);
            this.currentIndex = 0;
            this.score = 0;
        },
        onSubmit() {
            let _unansweredQuestions = [];
            for (const question of this.myQuiz) {
                if (!question.isAnswered) {
                    const _index = this.myQuiz.findIndex(value => value.questionId === question.questionId);
                    console.log(_index);
                    _unansweredQuestions.push(_index + 1);
                }
            }
            if (_unansweredQuestions.length != 0) {
                alert(`please finish the following questions!\nquestions: ${_unansweredQuestions}`);
                return;
            }

            // JSON.parse(JSON.stringify(_quiz)) 로 하면  console.log(this.myQuiz[i] instanceof Quiz) is false 
            let _numOfCorrectAnswers = 0;
            for (let i = 0; i < this.myQuiz.length; i++){
                if (this.myQuiz[i].isAnsweredCorrectly) _numOfCorrectAnswers++;
            }
            this.score = _numOfCorrectAnswers / this.quiz.length * 100;
            this.mode = "result";
        },
        reTakeQuiz() {
            this.mode = "quiz";
            this.resetQuiz();
        }
    },
    getters: {
        myQuiz() {
            let _arr = [new Quiz()];
            _arr = this.quiz;
            return _arr;
        }
    },
})
