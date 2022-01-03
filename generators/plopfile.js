module.exports = (plop) => {
  plop.setGenerator('button', {
    description: 'Create a button',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your button name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/buttons/{{pascalCase name}}/index.tsx',
        templateFile: 'buttons/button.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/buttons/{{pascalCase name}}/styles.ts',
        templateFile: 'buttons/styles.ts.hbs',
      },
    ],
  });

  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'components/component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'components/styles.ts.hbs',
      },
    ],
  });

  plop.setGenerator('hook', {
    description: 'Create a hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your hook name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/hooks/{{pascalCase name}}.tsx',
        templateFile: 'hooks/hook.tsx.hbs',
      },
    ],
  });

  plop.setGenerator('pages', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/pages/{{lowerCase name}}/index.tsx',
        templateFile: 'pages/page.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/styles/pages/{{lowerCase name}}/{{lowerCase name}}.styles.ts',
        templateFile: 'components/styles.ts.hbs',
      },
    ],
  });
};
