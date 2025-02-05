import dataPopulate from './dataPopulate.json'

export class DummyDatasBase {
  storageName
  stored_data
  initialData = dataPopulate
  constructor(storageName = 'dummyDatasBase') {
    this.storageName = storageName
    this.stored_data = this.initialize()
  }

  initialize() {
    const localDb = localStorage.getItem(this.storageName) 
    if (!localDb) {
      localStorage.setItem(this.storageName, JSON.stringify(this.initialData))
      this.stored_data = this.initialData
    } else {
      this.stored_data = JSON.parse(localDb)
    }
    return this.stored_data
  }
  getItems() {
    return this.stored_data
  }
  getItemById(id) {
    return this.stored_data.find((data) => data.id == id)
  }

  
  add(data) {
    this.stored_data = [...this.stored_data, data]
    this.updateLocalStorage()
  }
  update(updateData) {
    this.stored_data = this.stored_data.filter((data) => data.id !== updateData.id)
    this.add(updateData)
  }
  delete(id) {
    this.stored_data = this.stored_data.filter((data) => data.id !== id)
    this.updateLocalStorage()
  }


  updateLocalStorage() {
    const sortedData = this.stored_data.sort((a,b) =>a.id - b.id )
    localStorage.setItem(this.storageName, JSON.stringify(sortedData))
  }

 
}

export const dummyDatasBase = new DummyDatasBase()
