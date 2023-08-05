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
};

const generateJsonToFigmaComponent = (data: any) => {
  const rect = figma.createRectangle();
  for (let key in data) {
    if (key === 'height' || key === 'width') {
      rect.resize(data['width'], data['height']);
    } else if (key === 'children') {
      rect.parent.appendChild(generateTextNode(data['children'][0]));
    } else {
      rect[key] = data[key];
    }
  }
  return rect;
};

const generateTextNode = (data: any) => {
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
