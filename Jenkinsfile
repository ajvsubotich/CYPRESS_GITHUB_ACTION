pipeline {
    agent any

    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/e2e/**/**', description:'EJ: cypress/integration/pom/*.spec.js')
        choice(name: 'BROWSER', choices: ['chrome', 'firefox'], description: 'Escoja un navegador de ejecucion')
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building aplication'
            }
        }
        stage('Testing') {
            steps {
                bat 'npm i'
                bat "npx  cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying project'
            }
        }
    }

    post {
        always {
            /* groovylint-disable-next-line LineLength */
            echo ("wuhuuuu.....!!!")
        }
    }
}

