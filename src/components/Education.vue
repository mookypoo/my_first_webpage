<template>
    <div class="school">
    <h1>학력</h1>
    <ul>
        <li v-for="school in schools" v-bind:key="school">
            <div class="korean">
                <span id="schoolType">{{ school.school.type }}</span>
            </div>
            <div class="spaceRow">
                <span id="schoolName">{{ school.school.name }}</span>
                <span id="years">{{ school.attendedYears }}</span>
            </div>
            <div>
                <span id="major">{{ school.majorText }}</span>
            </div>
        </li>
    </ul>
</div>  
</template>

<script>
const GraduationStatus = {
    graduated: "졸업",
    attending: "재학중",
    droppedOut: "중퇴 ",   
}

class School {
    constructor(type, name){
        this.type = type
        this.name = name
    }
}

class MySchool {
    constructor(school, startYear, endYear, status, major){
        if (school instanceof School == false) {
            console.log("is not school");
            return;
        } 
        this.school = school
        this.startYear = startYear
        this.endYear = endYear
        this.status = status
        this.major = major
    }

    get attendedYears() {
        return `${this.startYear} ~ ${this.endYear}`
    }

    get majorText() {
        if (this.major == undefined) return
        return `전공: ${this.major}`
    }
    
}

export default {
    data() {
        return {
            schools: [
                new MySchool(
                    new School("대학원", "Boston University School of Law"),
                    2017,
                    2019,
                    GraduationStatus.droppedOut,
                    "law"
                ),
                new MySchool(
                    new School("대학교", "Emory University"),
                    2011, 
                    2015,
                    GraduationStatus.graduated,
                    "Psychology, Music (composition)"
                ),
                new MySchool(
                    new School("고등학교", "한영외국어고등학교"),
                    2011, 
                    2015,
                    GraduationStatus.graduated,
                ),
            ]
        }
    },
    mounted() {
        //console.log(this.education.school.type)
    }
}
</script>

<style scoped> 

.school {
    width: 60%;
    padding-left: 20%;
    padding-right: 20%;
    text-align: left;
    
}

#schoolType {
    margin-bottom: 5px;
    font-weight: medium;
    text-align: left;
}

.spaceRow {
    display: flex;
    justify-content: space-between;
}

#schoolName {
    font-size: 20px;
    font-weight: bold;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    margin-bottom: 15px;
}

#major {
    display: flex;
    
    justify-content: flex-end;
    
}
</style>