/**
 * Created by isaac_gu on 2015/12/4.
 */

/**
 * Tools �����ռ�
 */
var Tools = {};


/**
 * Ѽʽ���νӿ�
 * һ����ʵ�ֽӿڵ���ҪĿ�ľ��ǰѽӿ���ķ���ȫ��ʵ����
 * ��ȫ������� ����Ҳʵ��ͳһ Ҳʵ�ֽ�����
 */
/**
 * #1. �ӿ�����Ҫ2������
 * ����1�� �ӿڵ�����
 * ����2�� ���ܷ������Ƶļ��ϣ����飩
 */
/**
 * �ӿ�
 * @param name
 * @param methods
 * @constructor
 */
Tools.Interface = function(name, methods){
    //�жϽӿڵĲ�������
    if(arguments.length != 2){
        throw new Error("this instance interface constructor arguments must be 2!");
    }
    this.name = name;
    this.methods = [];      //����һ�����õĿ�������� �ȴ�����methods���Ԫ�أ��������ƣ�
    for(var i = 0, len = methods.length; i < len; i++){

        if(typeof methods[i] !== 'string'){
            throw new Error("the interface method name ");
        }
        this.methods.push(methods[i]);
    }

}

/**
 * #2. ������ķ���
 * ���ͨ���������κβ����������ͨ���� ������ܳ�error
 */
//���������Ŀ�� ���Ǽ�ַ�����
/**
 * �ӿڵľ�̬����
 * @param object
 */
Tools.Interface.ensureImplements = function(object){
    //������ķ����Ĳ���С��2�� ��������ʧ�ܣ�
    if(arguments.length < 2){
        throw new Error('this instance interface constructor arguments must be 2!');
    }

    //��ýӿ�ʵ������
    for(var i = 1, len = arguments.length; i < len; i++){
        var instanceInterface = arguments[i];
        //�жϲ����Ƿ��ǽӿڵ�����
        if(instanceInterface.constructor !== Tools.Interface){
            throw new Error("the arguments constructor not be interface class!");
        }
        //ѭ���ӿ�ʵ�����������ÿһ������
        for(var j = 0; j < instanceInterface.methods.length; j++){
            //string ��һ����ʱ��������ÿһ������������
            var methodName = instanceInterface.methods[j];
            //object[key] ���Ƿ���
            //�����ڣ����ߴ��ڵ����Ǻ���
            if(!object[methodName] || typeof object[methodName] !== 'function'){
                throw new Error('the method [' + methodName + '] is not found');
            }
        }
    }

}

/**
 * �̳�
 * @param sub
 * @param sup
 */
Tools.extend = function(sub, sup){
    //1. ʵ��ֻ�̳и����ԭ�Ͷ��� - ��һ���պ���������ת
    var F = new Function();
    //2. ʵ���˿պ����͸����ԭ�Ͷ��ָ�ת��
    F.prototype = sup.prototype;
    //3. ԭ�ͼ̳�
    sub.prototype = new F();
    //4. ��ԭ����Ĺ�����
    sub.prototype.constructor = sub;
    //����һ�¸����ԭ�Ͷ��� һ���淽������һ����������ɻ�ø����ԭ�Ͷ���
    sub.superclass = sup.prototype;

    //#3. �ӱ��� - �жϸ����ԭ�͹�����
    if(sup.prototype.constructor == Object.prototype.constructor){
        sup.prototype.constructor = sup; //�ֶ���ԭ����Ĺ�����
    }

}

Tools.EventUtil = {
    addHandler: function(element, type, handler){
        //ff
        if(element.addEventListener){
            element.addEventListener(type, handler, false);
        } else if(element.attachEvent){ //ie
            element.attachEvent("on" + type, handler, false);
        }
    },
    removeHandler: function(element, type, handler){
        if(element.removeEventListener){
            element.removeEventListener(type, handler, false);
        } else if(element.detachEvent){ //ie
            element.detachEvent("on" + type, handler, false);
        }
    }

}










