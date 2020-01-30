const fs = require('fs');
const path = require('path');

class JsonModel {
	constructor (name) {
		this.modelName = name;
		this.modelPath = path.join(__dirname, `../data/${this.modelName}.json`);
	}

	getAll () {
		let fileContent = fs.readFileSync(this.modelPath, 'utf-8');
		let jsonContent = fileContent.length > 0 ? JSON.parse(fileContent) : [];
		return jsonContent;
	}

	save (newData) {
		let allData = this.getAll();
		let id = this.generateId();
		newData = {id, ...newData}
		allData = [...allData, newData];
		fs.writeFileSync(this.modelPath, JSON.stringify(allData, null, ' '));
	}

	generateId () {
		let allData = this.getAll();
		if (allData.length === 0) {
			return 1;
		}
		return ++allData.pop().id;
	}

	findByPk (pk) {
		let allData = this.getAll();
		return allData.find(oneRegister => oneRegister.id == pk);
	}

	destroy (pk) {
		let allData = this.getAll();
		allData = allData.filter(register => register.id != pk);
		fs.writeFileSync(this.modelPath, JSON.stringify(allData, null, ' '));
	}
}

module.exports = JsonModel;
