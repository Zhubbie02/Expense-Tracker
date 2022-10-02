import React from 'react'

function Header({totalExpenses}) {
    return (
        <header>
            <h1>Expense Tracker</h1>
            <div className="total-expenses">#{totalExpenses}</div>
        </header>
    )
}

export default Header;