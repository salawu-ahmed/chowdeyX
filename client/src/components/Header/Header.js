import React from 'react'
import classes from './header.module.css'
import { Link } from 'react-router-dom'
import { useCart } from '../../Hooks/useCart'

export default function Header() {
    const user = {
        name: 'John'
    }
    const {cart} = useCart()
    const logout = () => {}
  return (
      <header className={classes.header}>
            <div className={classes.container}>
                <Link to='/' className={classes.logo}>
                    Chowdey
                </Link>
                <nav>
                    <ul>
                        {
                            user ? (
                              <li className={classes.menu_container}>
                                  <Link to='/profile'>{user.name}</Link>
                                  <div className={classes.menu}>
                                      <Link to='/profile'>Profile</Link>
                                      <Link to='/orders'>Orders</Link>
                                      <a onClick={logout}>Logout</a>
                                  </div>
                              </li>
                            ): (
                                  <Link to='/'>Login</Link>
                            )
                        }

                        <Link to='/cart'>
                          cart
                          {cart.totalCount > 0 && <span className={classes.cart_count}>{cart.totalCount}</span>}
                        </Link>
                    </ul>
                </nav>
          </div>
      </header>
  )
}
