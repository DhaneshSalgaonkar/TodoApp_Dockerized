pipeline {
    agent any

    stages {
        stage('Setup Backend Environment') {
            steps {
                dir('backend') {
                    sh '''
                        sudo apt update
                        sudo apt install python3-venv -y
                        python3 -m venv myenv
                        . myenv/bin/activate
                        pip install -r requirements.txt
                        pm2 restart flask-backend || pm2 start app.py flask-backend
                    '''
                }
            }
        }

        stage('Setup Frontend Environment') {
            steps {
                dir('frontend') {
                    sh '''
                        npm install
                        pm2 restart express-frontend || pm2 start app.js express-frontend
                    '''
                }
            }
        }
    }
}