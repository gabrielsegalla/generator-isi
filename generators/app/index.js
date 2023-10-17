
import Generator from 'yeoman-generator';
import chalk from 'chalk'
import { simpleGit } from 'simple-git';

import * as fs from 'fs';

export default class extends Generator {
  

  constructor(args, opts) {
    super(args, opts);
    this.argument('ISI', { type: String, required: false });
  }

  // Async Await
  async prompting() {
    this.answers = await this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname, // appname return the default folder name to project
      store: true,
    },
    ]);
  }


  initializing() {
    this.log(chalk.magenta('***---***---***---***---***---***'))
    this.log(chalk.green('            SCAFFOLD ISI        '))
    this.log(chalk.magenta('***---***---***---***---***---***'))
  }

  writing() {
    this._writingReactTemplate();
  }

  _packageJsonTitle(string) {
    // Remover espaços em branco e caracteres especiais
    string = string.replace(/[^\w-~\/]/g, '');
  
    // Converter para letras minúsculas
    string = string.toLowerCase();
  
    // Adicionar prefixo "@user/" se não começar com "@" ou "user/"
    if (!string.match(/^(?:@(?:[a-z0-9-*~][a-z0-9-*._~]*)?\/[a-z0-9-._~])|[a-z0-9-~][a-z0-9-._~]*$/)) {
      string = `@user/${string}`;
    }
  
    // Retornar a string adaptada ao padrão
    return string;
  }

  _writingReactTemplate() {
    const git = simpleGit();

    const gitRepoUrl = 'https://github.com/gabrielsegalla/GenericFrontend.git';

    const destiny = this.answers.name;

    this.log(chalk.blue('Cloning Repository...'));

    git.clone(gitRepoUrl, destiny, (err)=>{
      if(err){
        this.log(chalk.red(err))
      }else{
        const indexHtmlPath = `${destiny}/public/index.html`;
        const indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');
        const modifiedIndexHtmlContent = indexHtmlContent.replace('gdProject', this.answers.name);

        const navbarfilePath = `${destiny}/src/components/Navbar.tsx`;
        const navbarfileContent = fs.readFileSync(navbarfilePath, 'utf-8');
        const navbarModifiedContent = navbarfileContent.replace('gdProject', this.answers.name);

        const packagefilePath = `${destiny}/package.json`;
        const packagefileContent = fs.readFileSync(packagefilePath, 'utf-8');
        const packageModifiedContent = packagefileContent.replace('gd-project', this._packageJsonTitle(this.answers.name));

        // Agora, você pode sobrescrever o arquivo com o conteúdo modificado:
        fs.writeFileSync(indexHtmlPath, modifiedIndexHtmlContent);
        fs.writeFileSync(navbarfilePath, navbarModifiedContent);
        fs.writeFileSync(packagefilePath, packageModifiedContent);
      }
    });




    

  
  }


  end() {
    this.log(chalk.magenta('***---***---***---***---***---***'))
    this.log(chalk.blue(`Success! Created a generic Project using NextJs at /${this.answers.name} ` ))

    this.log(chalk.blue(`We suggest that you begin by typing:\n` ))
    this.log(chalk.green(`cd ${this.answers.name}`))
    this.log(chalk.green(`npm install`))
    this.log(chalk.green(`npm run dev`))
    this.log(chalk.magenta('***---***---***---***---***---***'))
  }

};