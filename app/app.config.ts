export default defineAppConfig({
  ui: {
    colors: {
      primary: 'epitech',
      neutral: 'slate',
      error: 'rose'
    },
    input: {
      slots: {
        base: 'shadow-xs transition-all'
      },
      variants: {
        size: {
          md: {
            trailing: 'pe-2'
          }
        }
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: ['outline', 'subtle'],
          class: 'focus-visible:ring-1'
        },
        {
          color: 'error',
          variant: ['outline', 'subtle'],
          class: 'focus-visible:ring-1'
        }
      ]
    },
    button: {
      slots: {
        base: 'shadow-xs transition-colors'
      }
    }
  }
})
