figma.showUI(__html__);

const renderJsonOfComponent = () => {
  const selectedElements = figma.currentPage.selection;
  console.log(selectedElements);
};

const componentData = {
  // _type: 'shape',
  // shapeType: 'round rectangle',
  cornerRadius: 14,
  fills: [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }],
  // name: 'rectangle_3270',
  // id: '1347:4036',
  x: 5908,
  y: 1123,
  width: 299,
  height: 96,
  children: [
    {
      characters: 'E-commerce',
      // fontName: {
      //   family: 'Poppins',
      //   style: 'Bold',
      // },
      fontWeight: 700,
      fontSize: 36,
    },
  ],
  // _effects: {
  //   frameFX: {
  //     lineSize: 1,
  //     color: '0x7627bd',
  //     alpha: 1,
  //   },
  // },
  // _constraints: {
  //   horizontal: 'MIN',
  //   vertical: 'MIN',
  // },
};

figma.ui.onmessage = (msg) => {
  if (msg.type === 'create-rectangles') {
    // const nodes = [];
    // for (let i = 0; i < 4; i++) {
    //   const rect = figma.createRectangle();
    //   rect.x = i * 150;
    //   rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];
    //   figma.currentPage.appendChild(rect);
    //   nodes.push(rect);
    // }
    // figma.currentPage.selection = nodes;
    // figma.viewport.scrollAndZoomIntoView(nodes);
    // figma.ui.postMessage({
    //   type: 'create-rectangles',
    //   message: `Created ${4} Rectangles`,
    // });
    // figma.closePlugin();

    const renderComponent = generateJsonToFigmaComponent(componentData);
    figma.currentPage.appendChild(renderComponent);
    figma.viewport.scrollAndZoomIntoView([renderComponent]);
  }

  if (msg.type === 'console') {
    renderJsonOfComponent();
  }
  if (msg.type === 'create-dublicate') {
    // getComponentDataFromComponentKey();
    // getListOfPublishComponents();
    // createDuplicateOfTheComponentFromSharedLib();
    // createDuplicateOfTheComponent();
    // createDuplicateOfTheComponentFromAnotherPage();
  }
  if (msg.type === 'generate-ui') {
    generateMockUIWithAnimationForMobileAndDesktop();
  }
};

const createDuplicateOfTheComponent = () => {
  const selectedElements = figma.currentPage.selection;

  if (selectedElements.length > 0) {
    selectedElements.forEach((element) => {
      const duplicatedElement = element.clone();
      duplicatedElement.x += 100;
      duplicatedElement.y += 100;
      figma.currentPage.appendChild(duplicatedElement);
      figma.currentPage.selection = [duplicatedElement];
    });
  } else {
    console.warn('No elements selected for duplication.');
  }
};

const createDuplicateOfTheComponentFromAnotherPage = () => {
  const currentPage = figma.currentPage;

  const targetPage = figma.root.children.find((page) => page.name === 'UI Designing');

  if (targetPage) {
    targetPage.selection.forEach((element) => {
      const duplicatedElement = element.clone();
      duplicatedElement.x += 100;
      duplicatedElement.y += 100;
      currentPage.appendChild(duplicatedElement);
      currentPage.selection = [duplicatedElement];
    });

    console.log(`Elements duplicated to ${targetPage.name}`);
  } else {
    console.warn('Target page not found.');
  }
};

const getComponentDataFromComponentKey = async () => {
  const personalAccessToken = 'figd_sfB_yEq6VeMPQSQ32RULsB6qoWIudW5QhPgzap1v';
  const componentKey = 'd2c8f0c089641d97834a3536830a2cc1badc4183';
  const headers = {
    'X-Figma-Token': personalAccessToken,
  };
  const componentSet = await fetch(`https://api.figma.com/v1/components/${componentKey}`, {
    method: 'GET',
    headers: headers,
  });
  const componentData = await componentSet.json();
  console.log(componentData?.meta);
};

const getListOfPublishComponents = async () => {
  const personalAccessToken = 'figd_VGdAsXkW79caN7kjQdQytsl5EdVHv7pYTTjoMawc';
  const teamKey = '1304823298077977946';
  const headers = {
    'X-Figma-Token': personalAccessToken,
  };
  const listOfTeamComponents = await fetch(`https://api.figma.com/v1/teams/${teamKey}/components`, {
    method: 'GET',
    headers: headers,
  });
  const listOfComponents = await listOfTeamComponents.json();

  console.log(listOfComponents?.meta?.components);
};

// const targetPage = figma.root.children.find((page) => page.name === 'UI Designing');

// const animationComponent = targetPage.children.find((page) => {
//   return page.name === 'Animation';
// });

// const clonedAnimationComponent = animationComponent.clone();

const generateMockUIWithAnimationForMobileAndDesktop = async () => {
  let currentComponentHeight = 0;

  const dynamicComponents = [
    { name: 'C1', height: 100, color: { r: 0.8, g: 0.2, b: 0.2 } },
    { name: 'C2', height: 150, color: { r: 0.2, g: 0.8, b: 0.2 } },
    { name: 'C3', height: 120, color: { r: 0.2, g: 0.2, b: 0.8 } },
  ];

  const currentPage = figma.currentPage;
  const cursorPosition = figma.viewport.bounds;
  const mobileFrame = figma.createFrame();
  mobileFrame.name = 'Mobile UI';
  mobileFrame.resize(375, 625);

  if (cursorPosition) {
    mobileFrame.x = cursorPosition.x;
    mobileFrame.y = cursorPosition.y;
  } else {
    mobileFrame.x = 100;
    mobileFrame.y = 100;
  }

  currentPage.appendChild(mobileFrame);

  figma.viewport.scrollAndZoomIntoView([mobileFrame]);

  await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });

  // Animation Container
  const animationContainer = figma.createFrame();
  const loadingText = figma.createText();
  animationContainer.resize(375, 49);
  animationContainer.fills = [
    {
      type: 'GRADIENT_LINEAR',
      gradientStops: [
        { position: 0, color: { r: 0.2, g: 0.4, b: 0.8, a: 0.3 } },
        { position: 1, color: { r: 0.8, g: 0.2, b: 0.4, a: 0.4 } },
      ],
      gradientTransform: [
        [1, 0, 0],
        [0, 1, 0],
      ],
    },
  ];

  loadingText.characters = 'Generating UI...';
  loadingText.x = 143.2;
  loadingText.y = 12.82;
  loadingText.textAlignVertical = 'CENTER';
  loadingText.textAlignHorizontal = 'CENTER';
  animationContainer.appendChild(loadingText);

  mobileFrame.appendChild(animationContainer);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Generating Dynamic Components
  for (let idx = 0; idx < dynamicComponents.length; idx++) {
    const dynamicComponent = figma.createRectangle();
    dynamicComponent.name = dynamicComponents[idx].name;
    dynamicComponent.resize(375, dynamicComponents[idx].height);
    dynamicComponent.y = currentComponentHeight;
    dynamicComponent.fills = [{ type: 'SOLID', color: dynamicComponents[idx].color }];
    mobileFrame.appendChild(dynamicComponent);
    currentComponentHeight += dynamicComponents[idx].height;
    mobileFrame.resizeWithoutConstraints(375, currentComponentHeight + 40);
    animationContainer.y = currentComponentHeight; // Moving the Position of the UI

    await delay(1000);
  }

  animationContainer.remove();
  mobileFrame.resizeWithoutConstraints(375, currentComponentHeight);
};

const generateJsonToFigmaComponent = (data: any) => {
  const rect = figma.createRectangle();

  for (let key in data) {
    if (key === 'height' || key === 'width') {
      rect.resize(data['width'], data['height']);
    } else if (key === 'children') {
      rect.parent.appendChild(generateTextNode(data[key][0]));
    } else {
      rect[key] = data[key];
    }
  }
  return rect;
};

const generateTextNode = (data: any) => {
  console.log(data);
  const text = figma.createText();
  for (let key in data) {
    if (key === 'height' || key === 'width') {
      text.resize(data['width'], data['height']);
    } else {
      text[key] = data[key];
    }
    return text;
  }
};
