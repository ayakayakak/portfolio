import {SectionList as SectionListType} from 'types/myTypes'

type SectionList = {index: number, label: SectionListType, value:SectionListType}[]
export  const sectionList:SectionList = [
  {index: 0,label: "ABOUT", value: "ABOUT"},
    {index: 1,label: "SKILL", value: "SKILL"},
    {index: 2,label: "CONTACT", value: "CONTACT"}
  ]