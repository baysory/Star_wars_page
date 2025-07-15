const sharp = require('sharp');
const { glob } = require('glob');
const fs = require('fs-extra');
const path = require('path');

const destDir = path.join(__dirname, 'dist', 'images');

console.log('Iniciando o processamento de imagens com Sharp...');

fs.ensureDirSync(destDir);

glob('src/images/**/*.{jpg,jpeg,png,gif}')
    .then(files => {
        if (files.length === 0) {
            return console.log('Nenhuma imagem encontrada para processar.');
        }

        console.log(`Encontradas ${files.length} imagens. Otimizando...`);

        return Promise.all(files.map(file => {
            const filename = path.basename(file);
            const outputFile = path.join(destDir, filename);

            return sharp(file)
                .jpeg({ quality: 75, mozjpeg: true })
                .png({ quality: 80, compressionLevel: 8 })
                .toFile(outputFile)
                .then(() => console.log(`✅ ${filename} otimizada com sucesso!`))
                .catch(e => console.error(`❌ Falha ao otimizar ${filename}:`, e));
        }));
    })
    .catch(err => {
        console.error('❌ Falha ao encontrar imagens:', err);
    });