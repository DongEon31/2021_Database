# 2021-02-database

## 3주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:DongEon31/2021-db.git
    - (token을 사용하는 경우) git clone https://github.com/DongEon31/2021-db.git
2. week_3 폴더로 이동
    > cd week_3
3. 콘솔창(powershell)에서 npm package 설치
    > npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)
<pre>
<code>
const pool = mysql.createPool(
    process.env.JAWSDB_URL ??{
        host: 'localhost',
        user: 'root', // 본인의 mysql user id
        database: 'toturial', // 본인이 만든 데이터베이스 이름
        password: 'password', // 본인의 mysql password
        waitForConnections: true,
        connectionLimit: 10,
        queueLijmit: 0
    }
);
</code>
</pre>
<br>

## <span style="color:red">========week3 테이블========</span>
## 사용자 목록(Student)
학번|이름|학년|전공|시간|이메일
---|---|---|---|---|---|
12121212|김철수|3|정보통신공학과|2021.09.12.22:23:32|COM@daum.net|
12171756|김동언|3|정보통신공학과|2021.09.19.15:39:55|ahzmdkd1357@gmail.com|
12347654|홍길동|2|정보통신공학과|2021.08.11.13:11:30|ICE@naver.com|
12998877|김영희|3|컴퓨터공학과|2020.01.31.08:12:52|kyh@naver.com|
<br>

## <span style="color:red">========week8 테이블========</span>
## 직원(Employee)
Fname|Minit|Lname|Ssn|Bdate|Addr|Sex|Salary|Super_ssn|Dno
---|---|---|---|---|---|---|---|---|---|
철수|C|박|12121212|1998.01.23|인천|남|1800|-|2|
동언|M|김|12171756|1998.03.31|서울|남|1500|12312312|1|
호연|A|정|12312312|1998.12.12|대구|여|2000|-|1|
영희|B|최|12341234|1999.09.09|부산|여|1200|12121212|2|
민수|P|김|12344321|1998.12.25|강원|남|2500|-|3|

## 부서(Department)

Dname|Dnumber|Mgr_ssn|Mgr_start_date
---|---|---|---|
Headquarter|1|12312312|2021.01.01|
Marketing|2|12121212|2020.12.25|
Human Resources|3|12344321|2021.02.02|

<br>

## <span style="color:red">========week10 테이블========</span>
## IT 공대(Department)

과|번호
---|---|
전기공학과|2|
전자공학과|3|
정보통신공학과|0|
컴퓨터공학과|1|

## 과목 리스트(Course)

과목이름|과목코드|과목번호
---|---|---|
프로그래밍실습|CS1111|1|
공업수학|CS1234|2|
전자기학|ICE2121|3|
자료구조론|ICE2222|4|
데이터베이스설계|ICE4016|5|
