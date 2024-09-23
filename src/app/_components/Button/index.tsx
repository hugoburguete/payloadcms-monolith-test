'use client'

import React, { ElementType } from 'react'
import cx from 'classnames'
import Link from 'next/link'

import classes from './index.module.scss'

export type Props = {
  label?: string
  appearance?: 'default' | 'primary' | 'secondary' | 'none'
  el?: 'button' | 'link' | 'a'
  onClick?: () => void
  href?: string
  newTab?: boolean
  className?: string
  type?: 'submit' | 'button'
  disabled?: boolean
  invert?: boolean
}

export const Button: React.FC<Props> = ({
  el: elFromProps = 'link',
  label,
  newTab,
  href,
  appearance,
  className: classNameFromProps,
  onClick,
  type = 'button',
  disabled,
  invert,
}) => {
  let el = elFromProps

  const newTabProps = newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  const className = [
    classes.button,
    classNameFromProps,
    classes[`appearance--${appearance}`],
    invert && classes[`${appearance}--invert`],
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <div className={`flex items-center content-around`}>
      <span className={`mb-0 text-center flex items-center`}>{label}</span>
    </div>
  )

  if (onClick || type === 'submit') el = 'button'

  if (el === 'link') {
    return (
      <Link
        href={href || ''}
        className={cx(
          classNameFromProps,
          'border-none cursor-pointer inline-flex content-center bg-transparent py-3 px-6 no-underline',
          {
            ['asd']: appearance === 'primary',
          },
        )}
        {...newTabProps}
        onClick={onClick}
      >
        {content}
      </Link>
    )
  }

  const Element: ElementType = el

  return (
    <Element
      href={href}
      className={className}
      type={type}
      {...newTabProps}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </Element>
  )
}
