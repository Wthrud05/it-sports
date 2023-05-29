import './style.css'

interface ResData {
  userId: number
  id: number // Тип данных number, так как в API id является числом
  title: string
  body: string
}

class FifteenthTitle {
  static #URL = 'https://jsonplaceholder.typicode.com/posts'
  static #ID = 15

  static #get() {
    fetch(FifteenthTitle.#URL)
      .then((res) => {
        if (res.ok) {
          return res.json() // Оператор return необходим для передачи результата функции fetch() в then()
        }
      })
      .then((resData) => FifteenthTitle.getDataFromJson(resData))
      .then((title) => console.log(title))
      .catch(({ message }) => console.error(message))
  }

  static getDataFromJson(resData: ResData[]) {
    const itemWithTitle = resData.find((item) => item.id === FifteenthTitle.#ID) // Используем метода массива find для поиска элемента массива с id = 15

    const title = itemWithTitle?.title
    return title // Используем оператор return для возвращения результата из метода getDataFromJson()
  }

  run() {
    FifteenthTitle.#get()
  }
}

const fifteenthTitle = new FifteenthTitle()
fifteenthTitle.run()
