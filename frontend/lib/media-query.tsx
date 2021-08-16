import mediaQuery from 'styled-media-query'

// @ts-ignore
export const mediaPc = mediaQuery.greaterThan('1024px')
// @ts-ignore
export const mediaTablet = mediaQuery.lessThan('768px')
// @ts-ignore
export const mediaSp = mediaQuery.lessThan('414px')

// @ts-ignore
export const mediaMiniPcForSkill = mediaQuery.lessThan('1180px')
// @ts-ignore
export const mediaTabletForSkill = mediaQuery.lessThan('900px')
// @ts-ignore
export const mediaSpForSkill = mediaQuery.lessThan('650px')
