import './index.css'

import {v4 as uuidv4} from 'uuid'

import {Component} from 'react'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    typeInput: 'INCOME',
    transactions: [],
    yourIncome: 0,
    yourExpenses: 0,
  }

  onChangeTitle = event => this.setState({titleInput: event.target.value})

  onChangeAmount = event => this.setState({amountInput: event.target.value})

  onChangeType = event => this.setState({typeInput: event.target.value})

  onAddTransaction = () => {
    const {titleInput, amountInput, typeInput} = this.state

    if (typeInput === 'INCOME') {
      const newTransaction = {
        id: uuidv4(),
        title: titleInput,
        amount: amountInput,
        type: typeInput,
      }
      this.setState(prevState => ({
        transactions: [...prevState.transactions, newTransaction],
        titleInput: '',
        amountInput: '',
        yourIncome: prevState.yourIncome + parseInt(amountInput),
      }))
    } else {
      const newTransaction = {
        id: uuidv4(),
        title: titleInput,
        amount: amountInput,
        type: typeInput,
      }
      this.setState(prevState => ({
        transactions: [...prevState.transactions, newTransaction],
        titleInput: '',
        amountInput: '',
        yourExpenses: prevState.yourExpenses + parseInt(amountInput),
      }))
    }
  }

  deleteTransaction = (id, amount, type) => {
    const {transactions} = this.state

    const filteredList = transactions.filter(
      eachTransaction => eachTransaction.id !== id,
    )
    if (type === 'INCOME') {
      this.setState(prevState => ({
        transactions: filteredList,
        yourIncome: prevState.yourIncome - parseInt(amount),
      }))
    } else {
      this.setState(prevState => ({
        transactions: filteredList,
        yourExpenses: prevState.yourExpenses - parseInt(amount),
      }))
    }
  }

  render() {
    const {
      yourIncome,
      yourExpenses,
      titleInput,
      amountInput,
      transactions,
    } = this.state

    console.log(transactions)

    const yourBalance = yourIncome - yourExpenses

    return (
      <div className="app-container">
        <div className="money-manager-container">
          <div className="profile-container">
            <h1 className="profile-heading">Hi, Richard</h1>
            <p className="profile-description">
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            yourBalance={yourBalance}
            yourIncome={yourIncome}
            yourExpenses={yourExpenses}
          />
          <div className="input-section-container">
            <form className="add-transaction-container">
              <h1 className="add-transaction-heading">Add Transaction</h1>
              <label htmlFor="title" className="title">
                Title
              </label>
              <input
                id="title"
                type="text"
                onChange={this.onChangeTitle}
                value={titleInput}
              />
              <label htmlFor="amount" className="amount">
                Amount
              </label>
              <input
                id="amount"
                type="text"
                onChange={this.onChangeAmount}
                value={amountInput}
              />
              <label htmlFor="transaction-type" className="transaction-type">
                Type
              </label>
              <select
                id="transaction-type"
                name="transaction-dropdown"
                onChange={this.onChangeType}
              >
                <option
                  value={transactionTypeOptions[0].optionId}
                  className="option"
                >
                  {transactionTypeOptions[0].displayText}
                </option>
                <option
                  value={transactionTypeOptions[1].optionId}
                  className="option"
                >
                  {transactionTypeOptions[1].displayText}
                </option>
              </select>
              <button type="button" onClick={this.onAddTransaction}>
                Add
              </button>
            </form>
            <div className="history-container">
              <h1 className="history-main-heading">History</h1>
              <div className="section-bar">
                <p className="bar-heading">Title</p>
                <p className="bar-heading">Amount</p>
                <p className="bar-heading">Type</p>
              </div>
              <ul className="transaction-container">
                {transactions.length !== 0 &&
                  transactions.map(eachTransactions => (
                    <TransactionItem
                      deleteTransaction={this.deleteTransaction}
                      transactionDetails={eachTransactions}
                      key={eachTransactions.id}
                    />
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
