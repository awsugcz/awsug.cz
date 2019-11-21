# How to add+share my presentation

I would like to ask all speakers to upload their presenation to the GiHub
the following way:

* Fork the repository from the
  [https://github.com/awsugcz/awsug.cz](https://github.com/awsugcz/awsug.cz)
  (top right ```Fork``` button).

* Clone forked repository from your personal GitHub account
  and create the branch:

  ```bash
  cd /tmp
  git clone git@github.com:ruzickap/awsug.cz.git
  cd awsug.cz
  git checkout -b feature/add_presentation remotes/origin/master
  ```

* Copy your presentation to the directory inside Git repository.
  The presentation file name should looks like
  "`<date>-<name_surname>-<presentation_name>.pdf`":

  ```bash
  cp ~/presentations/my_presentation.pdf static/presentations/2017-12-12/2017-09-20-Vladimir_Simek-Running_Docker_Containers_on_AWS.pdf
  ```

* Please put your name + contact details here (the **order** of the speakers
  should be **preserved**):

  ```bash
  vi static/presentations/README.md
  ```

* Lastly - add your name and presentation title here (the **order** of the
  speakers should be **preserved**):

  ```bash
  vi static/presentations/2017-12-12/README.md
  ```

* Check + add all modified files to the git repository and push it back
  to GitHub:

  ```bash
  git status
  ```

  ```text
  On branch feature/add_presentation
  Your branch is up-to-date with 'origin/master'.

  Changes not staged for commit:
    (use "git add <file>..." to update what will be committed)
    (use "git checkout -- <file>..." to discard changes in working directory)

          modified:   static/presentations/2017-12-12/README.md
          modified:   static/presentations/README.md

  Untracked files:
    (use "git add <file>..." to include in what will be committed)

          static/presentations/2017-12-12/2017-09-20-Vladimir_Simek-Running_Docker_Containers_on_AWS.pdf

  no changes added to commit (use "git add" and/or "git commit -a")
  ```

  ```bash
  git add .
  git commit -m  "Adding presentation from 2017-09-20 by Vladimir Simek - Running Docker Containers on AWS"
  ```

  ```text
  [feature/add_presentation 9e5f03e] Adding presentation from 2017-09-20 by Vladimir Simek - Running Docker Containers on AWS
  3 files changed, 43 insertions(+), 2 deletions(-)
  create mode 100644 static/presentations/2017-12-12/2017-09-20-Vladimir_Simek-Running_Docker_Containers_on_AWS.pdf
  ```

  ```bash
  git push
  ```

  ```text
  Counting objects: 8, done.
  Delta compression using up to 4 threads.
  Compressing objects: 100% (8/8), done.
  Writing objects: 100% (8/8), 1.59 KiB | 1.59 MiB/s, done.
  Total 8 (delta 4), reused 0 (delta 0)
  remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
  To github.com:ruzickap/awsug.cz.git
  * [new branch]      feature/add_presentation -> feature/add_presentation
  ```

* Then you should check your repository in the GitHub and click green button
  `Compare & pull request` which will guide you to create PR to the official
  [awsug.cz](https://github.com/awsugcz/awsug.cz) repository.

Thank you very much for your help...
