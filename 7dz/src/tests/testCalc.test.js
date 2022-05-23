import { mount } from "@vue/test-utils";
import Calc from "../components/Calc.vue";
import { expect } from "@jest/globals";
import 'regenerator-runtime/runtime';



describe('Test Calculator', ()=>{
//ввод данных в поле 1
  it('test operand1', ()=>{
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    operand1.setValue('1')

    expect(wrapper.vm.operand1).toBe(1)
  })
//вводы данных в поле 2
  it('test operand2', ()=>{
    const wrapper = mount(Calc)

    const operand2 = wrapper.find('input[name=operand2]')
    operand2.element.value = '1'
    operand2.trigger('input')

    expect(wrapper.vm.operand2).toBe(1)
  })
//сумма
  it('test sum', ()=>{
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    const operand2 = wrapper.find('input[name=operand2]')
    operand1.setValue('1')
    operand2.setValue('2')

    const btn = wrapper.find('button[name="+"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(3)
  })
//деление
  it('test div', ()=>{
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    const operand2 = wrapper.find('input[name=operand2]')
    operand1.setValue('4')
    operand2.setValue('2')

    const btn = wrapper.find('button[name="/"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(2)
  })
//умножение
  it('test mul', ()=>{
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    const operand2 = wrapper.find('input[name=operand2]')
    operand1.setValue('3')
    operand2.setValue('4')

    const btn = wrapper.find('button[name="*"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(12)
  })
//вычетание 
  it('test sub', ()=>{
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    const operand2 = wrapper.find('input[name=operand2]')
    operand1.setValue('3')
    operand2.setValue('4')

    const btn = wrapper.find('button[name="-"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(-1)
  })
//вывод эл. клавы
  it('test keyboard', async ()=>{
    const wrapper = mount(Calc)

    const showVK = wrapper.find('input[type="checkbox"]'); 
    await showVK.setChecked();
    expect(wrapper.element.checked).toBeTruthy;

//ввод в поле 2 эл. клавиатурой
    const btnTwo = wrapper.find('button[name=num2]');
    const btnFive = wrapper.find('button[name=num5]');
    btnTwo.trigger('click'); 
    btnTwo.trigger('click'); 
    btnFive.trigger('click'); 
    expect(wrapper.vm.operand2).toBe(225);

//кнопка удаления в поле 2
    const delBtn = wrapper.find('button[name=erase]'); 
    delBtn.trigger('click');
    expect(wrapper.vm.operand2).toBe(22);
    delBtn.trigger('click');
    expect(wrapper.vm.operand2).toBe(2);

//переключение на операнд 1
    const setOperand1AsPickedItem = wrapper.find('input[name=op1]');
    await setOperand1AsPickedItem.setChecked();
    expect(wrapper.vm.operand1).toEqual(0);

//ввод в поле 1 эл. клавиутурой
    const btnSeven = wrapper.find('button[name=num7]');
    const btnNine = wrapper.find('button[name=num9]');
    btnSeven.trigger('click'); 
    btnNine.trigger('click'); 
    expect(wrapper.vm.operand1).toBe(79);

//кнопка удаления в поле 1
    delBtn.trigger('click');
    expect(wrapper.vm.operand1).toBe(7);

  })

})
