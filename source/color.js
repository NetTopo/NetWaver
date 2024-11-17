const colorMap = {
    layer: [51, 85, 136,1.0],
    wrapper: {
        path: [51, 85, 136,1.0],
        text: [0, 0, 0,1.0],
    },
    activation: [112, 41, 33,1.0],
    pool: [51, 85, 51,1.0],
    normalization: [51, 85, 68,1.0],
    dropout: [69, 71, 112,1.0],
    shape: [108, 79, 71,1.0],
    tensor: [89, 66, 59,1.0],
    data: [85, 85, 85,1.0],
    quantization: [80, 40, 0,1.0],
    attention: [120, 60, 0,1.0],
    custom: [128, 128, 128,1.0],
};

const colorMapDark = {
    layer: [51, 85, 136,0.7],
    wrapper: {
        path: [51, 85, 136,0.7],
        text: [0, 0, 0,0.7],
    },
    activation: [75, 27, 22,0.7],
    pool: [51, 85, 51,0.7],
    normalization: [51, 85, 68,0.7],
    dropout: [69, 71, 112,0.7],
    shape: [108, 79, 71,0.7],
    transform: [51, 85, 68,0.7],
    tensor: [89, 66, 59,0.7],
    data: [85, 85, 85,0.7],
    quantization: [80, 40, 0,0.7],
    attention: [100, 50, 0,0.7],
    custom: [64, 64, 64,0.7],
};

export { colorMap,colorMapDark };
