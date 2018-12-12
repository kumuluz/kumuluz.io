import imgStartup from '../assets/images/use-cases/use-cases-startup.svg'
import imgIco from '../assets/images/use-cases/use-cases-ico.svg'
import imgEnterprises from '../assets/images/use-cases/use-cases-enterprises.svg'
import imgGovernments from '../assets/images/use-cases/use-cases-governments.svg'
import imgOpenSource from '../assets/images/use-cases/use-cases-open-source.svg'
import imgDevs from '../assets/images/use-cases/use-cases-devs.svg'

export const intendedFor = t => [
  {
    image: imgStartup,
    subTitle: t('useCasesSection.cases.startups.subTitle'),
    title: t('useCasesSection.cases.startups.title'),
    content: t('useCasesSection.cases.startups.content'),
    facts: [t('useCasesSection.cases.startups.facts.fact1')]
  },
  {
    image: imgIco,
    subTitle: t('useCasesSection.cases.ico.subTitle'),
    title: t('useCasesSection.cases.ico.title'),
    content: t('useCasesSection.cases.ico.content'),
    facts: [t('useCasesSection.cases.ico.facts.fact1')]
  },
  {
    image: imgEnterprises,
    subTitle: t('useCasesSection.cases.enterprises.subTitle'),
    title: t('useCasesSection.cases.enterprises.title'),
    content: t('useCasesSection.cases.enterprises.content'),
    facts: [t('useCasesSection.cases.enterprises.facts.fact1')]
  },
  {
    image: imgGovernments,
    subTitle: t('useCasesSection.cases.governments.subTitle'),
    title: t('useCasesSection.cases.governments.title'),
    content: t('useCasesSection.cases.governments.content'),
    facts: [t('useCasesSection.cases.governments.facts.fact1')]
  },
  {
    image: imgOpenSource,
    subTitle: t('useCasesSection.cases.openSource.subTitle'),
    title: t('useCasesSection.cases.openSource.title'),
    content: t('useCasesSection.cases.openSource.content'),
    facts: [t('useCasesSection.cases.openSource.facts.fact1')]
  },
  {
    image: imgDevs,
    subTitle: t('useCasesSection.cases.freelancers.subTitle'),
    title: t('useCasesSection.cases.freelancers.title'),
    content: t('useCasesSection.cases.freelancers.content'),
    facts: [t('useCasesSection.cases.freelancers.facts.fact1')]
  }
];

export const useCases = t => [
  {
    title: t('useCases.blocks.userManagement.title'),
    content: t('useCases.blocks.userManagement.content')
  },
  {
    title: t('useCases.blocks.customer.title'),
    content: t('useCases.blocks.customer.content')
  },
  {
    title: t('useCases.blocks.payment.title'),
    content: t('useCases.blocks.payment.content')
  },
  {
    title: t('useCases.blocks.cart.title'),
    content: t('useCases.blocks.cart.content')
  },
  {
    title: t('useCases.blocks.order.title'),
    content: t('useCases.blocks.order.content')
  },
  {
    title: t('useCases.blocks.invoice.title'),
    content: t('useCases.blocks.invoice.content')
  },
  {
    title: t('useCases.blocks.cms.title'),
    content: t('useCases.blocks.cms.content')
  },
  {
    title: t('useCases.blocks.ccm.title'),
    content: t('useCases.blocks.ccm.content')
  }
];
