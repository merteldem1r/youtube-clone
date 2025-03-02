export default class QuizService {
  static async getQuiz([num, categID, diff, type]) {
    const urlSettings = `${categID && "&category=" + categID}${
      diff && "&difficulty=" + diff
    }${type && "&type=" + type}`;

    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=${num}${urlSettings}&encode=base64`
      );
      const data = await response.json();
      if (data.results.length === 0) throw new Error();

      return data;
    } catch (err) {}
  }

  static async getQuestionsCountInDatabase() {
    const response = await fetch("https://opentdb.com/api_count_global.php");
    const data = await response.json();

    return data;
  }
}
