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
          sh 'echo "test pass"'
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
 stage('pass test')
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
