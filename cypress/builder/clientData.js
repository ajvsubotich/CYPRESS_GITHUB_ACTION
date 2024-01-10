export class ClientData {
    build() {
        return this
    }

    loginData() {
        this.successUser = 'standard_user'
        this.LockedOutUser = 'locked_out_user'
        this.problemUser = 'problem_user'
        this.performanceGlitchUser = 'performance_glitch_user'
        this.errorUser = 'error_user'
        this.visualUser = 'visual_user'

        // Password
        this.pass = 'secret_sauce'

        return this
    }

    createUserData() {
        this.userDefault = {
            firstName: 'ramon',
            lastName: 'rufino',
            userName: 'rufimon',
            pass: '95618Ale.!',
        }
        this.userDefault2 = {
            firstName: 'jose',
            lastName: 'garcia',
            userName: 'joelito',
            pass: '95618Ale.!',
        }
       
        return this
    }

    contactListData() {
        this.userEmail = 'rancho@gmail.com'
        this.password = '1234567'
        return this
    }

}

