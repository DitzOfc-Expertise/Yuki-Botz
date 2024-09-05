/**
  * Made By Ditz
  * Jumat 30 Agustus, 2024
  **/
async function npmSearch(query) {
  try {
    var axioss = require('axios')
    const response = await axioss.get(`https://registry.npmjs.org/${query}`);
    const {
      name,
      description
    } = response.data;
    const version = response.data['dist-tags'].latest;
    const packageLink = `https://www.npmjs.com/package/${name}`;
    const lastSlashIndex = name.lastIndexOf('/');
    const packageName = lastSlashIndex !== -1 ? name.substring(lastSlashIndex + 1) : name;
    const downloadLink = `https://registry.npmjs.org/${name}/-/${packageName}-${version}.tgz`;
    const npmPackageResponse = await axioss.get(packageLink);
    const $ = cheerio.load(npmPackageResponse.data);
    const publishedDate = $('time').first().text();
    const owner = response.data.maintainers[0].name;
    const keywords = response.data.keywords;
    const homepage = response.data.homepage;
    const license = response.data.license;
    const dependencies = response.data.dependencies;
    const readme = $('div[class="markdown"]').html();
    return {
      name,
      description,
      version,
      packageLink,
      packageName,
      downloadLink,
      publishedDate,
      owner,
      keywords,
      homepage,
      license,
      dependencies,
      readme
    };
  } catch (err) {
    console.log(err)
  }
}

module.exports = { npmSearch }