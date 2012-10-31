/**
* ���������� ������ Event
*
* @param {String}    [name = "�������"]  ��� �������
* @param {String}    [address = ""]      ������ �������
* @param {Object}    time                ���� �������
* @param {Array}     member              ���������
* @param {Number}    [raiting=3]         �������� ������� (�� ����� �� 0 �� 5)
*
* @example
*   Event(
*       "���������", "������������, ��. ���������, �. 4, ���. 150",
*       EventTime(new Date(2011, 10, 10, 14, 48, 00), 60),
*       ["������� ������ ����������"], 5)
*
* @return {Object}
* @see EventTime
*/

function Event(name, address, time, member, raiting) {
    "use strict";
    return {
        "name": name || "�������",
        "address": address.toString(),
        "time": time,
        "member": member || [],
        "raiting": +raiting || 3
    };
}


/**
* ���������� ������ EventTime
*
* @private
* @param {Number|Date} start          ������ �������
* @param {Number}      [length=0]     ������������ ������� � ��������
*
* @example
*    EventTime(new Date(2011, 10, 10, 14, 48, 00), 60)
*
* @return {Object}
*/
function EventTime(start, length) {
    "use strict";
    return {
        "start": +start,
        "length": +length || 0
    };
}