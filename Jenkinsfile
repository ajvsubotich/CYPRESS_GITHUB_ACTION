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
            steps{
                echo 'Deploying project'
            }
        }
    }
}

    post {
        always {
           echo "Se temrino de ejecutar el pipeline"
        }
        success {
            echo "esto esta way...!!!!!!!"
        }
        failure {
            // Acciones que se ejecutarán solo si alguna de las etapas falla
        }
        unstable {
            // Acciones que se ejecutarán solo si alguna de las etapas es inestable
        }
    }
}
