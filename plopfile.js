module.exports = function (plop) {
  // controller generator
  plop.setGenerator('component', {
    description: 'React Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.js',
        templateFile: './generatorTemplates/BasicComponent.js.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.scss',
        templateFile: './generatorTemplates/BasicComponent.scss.hbs',
      },
    ],
  });
  plop.setGenerator('page', {
    description: 'Gatsby Page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Page name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{name}}.js',
        templateFile: './generatorTemplates/BasicPage.js.hbs',
      },
      {
        type: 'add',
        path: 'styles/pageStyles/{{name}}.scss',
        templateFile: './generatorTemplates/BasicComponent.scss.hbs',
      },
    ],
  });
};
