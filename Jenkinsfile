pipeline {
    agent any

    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/e2e/**/**', description:'EJ: cypress/integration/pom/*.spec.js')
        choice(name: 'BROWSER', choices: ['chrome', 'firefox'], description: 'Escoja un navegador de ejecucion')
    }

    options {
        ansiColor('xterm')
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
                bat "npx run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploy') {
            steps{
                echo 'Deploying project'
            }
        }
    }
}

post {
    always{
        publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
    }
}
