# Базовые знания

Необходимо создать объект, описывающий событие в календаре.

У события должно быть начало, конец, место и название. Подумайте какой тип данных стоит использовать для каждого из полей.
Так же подумайте какие еще поля вы считаете, что должны быть. Например Рейтинг события (звезды от 0 до 5), Участники,
GPS координаты места, Какая-нибудь ссылка ... все они на ваше усмотрение и вкус.

В итоге у вас должена получиться функция, которая создает такой объект, проверяет валидность переданых данных. Кроме создания
функции необходимо, чтобы она так же проходила [jslint](http://jslint.com/) и была с задокументирована с помошью
[JSDoc](http://ru.wikipedia.org/wiki/JSDoc). (см. пример) Код должен быть в UTF-8!

Самый примитивный вид такой:

```javascript
/**
 * Возвращает объект Event
 *
 * @param {Number|Date} start             Начало события
 * @param {Number|Date} end               Конец события
 * @param {String}      [name="Событие"]  Имя события
 *
 * @example
 *    Event(new Date('2011-10-10T14:48:00'),
 *          new Date('2011-10-10T15:48:00'),
 *          "Совещание")
 *
 * @return {Object}
 */
function Event(start, end, name) {
    return {
        "start": +start,
        "end": +end,
        "name": name || "Событие"
    };
}
```
