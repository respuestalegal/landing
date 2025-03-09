import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Capital Federal" invert={invert}>
          {/* 1 Carlsberg Gate */}
          <br />
          Buenos Aires, Argentina
        </Office>
      </li>
      <li>
        <Office name="Wilde" invert={invert}>
          {/* 24 Lego Allé */}
          <br />
          Buenos Aires, Argentina
        </Office>
      </li>
    </ul>
  )
}
