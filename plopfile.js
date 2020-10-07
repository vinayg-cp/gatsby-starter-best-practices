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
};
