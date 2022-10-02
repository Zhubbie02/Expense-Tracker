import React, {useRef} from 'react';

function ExpenseForm({expense, setExpense}) {
    const description = useRef (null);
    const amount = useRef (null);
    const date = useRef(null);

    const AddExpense = (e) => {
        e.preventDefault();

        let x = date.current.value.split("-");
        let newDate = new Date (x[0], x[1] , x[2]);

        setExpense([...expense, {
            "description": description.current.value,
            "amount": amount.current.value,
            "date": newDate.getTime(),
        }]);

        description.current.value = "";
        amount.current.value = null;
        date.current.value = null
    }
    
    return (
        <form className="expense-form" onSubmit={AddExpense}>
            <div className="form">
                <input type="text" name="description" ref={description} placeholder="Please add expense Description..." className="description"></input>
                <input type="number" name="amount" ref={amount} placeholder="Please add amount..." className="amount"></input>
                <input type="date" name="date" ref={date} placeholder="please enter expense date..." ClassName="date"></input>
                <input type="submit" value="Add Expense" className="submit"></input>
            </div>

        </form>
    )
}

export default ExpenseForm;