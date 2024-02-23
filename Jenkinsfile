pipeline {
  agent any
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
        emailext(subject: 'Prueba de Jenkins', body: 'esto es una prueba ', attachLog: true, to: 'jennifer.simoza@gmail.com')
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
      echo 'wuhuuuu.....!!!'
    }

  }
  parameters {
    string(name: 'SPEC', defaultValue: 'cypress/e2e/buscarGoogle.spec.cy.js', description: 'EJ: cypress/integration/pom/*.spec.js')
    choice(name: 'BROWSER', choices: ['chrome', 'firefox'], description: 'Escoja un navegador de ejecucion')
  }
}