node
{
   stage('Clone repository')
  {
    node
    {
      try
      {
        checkout scm
        currentBuild.result = 'SUCCESS'
      }
      catch(any)
      {
         currentBuild.result = 'FAILURE'
         throw any
      }
      finally
      {
          step([$class: 'Mailer', notifyEveryUnstableBuild: true, recipients: 'arpitap@officebeacon.com', sendToIndividuals: true])
      }
    }
   }
   
   
   
stage('check test')
   {
    node
       {
         try
         {
             sh 'npm install'
             
             sh 'npm install --save-dev mocha'
             sh 'mocha'
             
             junit 'test-results.xml'
         }
         catch(any)
         {
           currentBuild.result = 'FAILURE'
           throw any
         }
         finally
         {
           step([$class: 'Mailer', notifyEveryUnstableBuild: true, recipients: 'arpitap@officebeacon.com', sendToIndividuals: true])
         }
       }
    }
 stage('pass test.......')
   {
    node
       {
         try
         {
            sh 'echo "Tests passed"'
         }
         catch(any)
         {
           currentBuild.result = 'FAILURE'
           throw any
         }
         finally
         {
           step([$class: 'Mailer', notifyEveryUnstableBuild: true, recipients: 'arpitap@officebeacon.com', sendToIndividuals: true])
         }
       }
    }
}
