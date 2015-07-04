
import pkg from '../package.json'
import { capitalize } from 'lodash'

export default {
  name: pkg.name,
  title: capitalize(pkg.name),
  href: 'http://jxnblk.com/rgx',
  description: pkg.description,
  links: [
    { href: pkg.homepage, text: 'GitHub' },
    { href: '///npmjs.com/package/' + pkg.name, text: 'npm' },
  ],
  homepage: pkg.homepage,
  bacon: 'Bacon ipsum dolor amet short loin capicola porchetta pork pork chop cow, tri-tip bresaola tenderloin short ribs picanha drumstick chicken t-bone. Bacon rump tail meatloaf, salami chicken shank swine short loin porchetta shankle kielbasa. Pork chop brisket kevin pancetta bacon, jowl sirloin leberkas. Tenderloin shoulder filet mignon kielbasa cupim brisket turducken tail drumstick. Sausage pig porchetta, pork turkey t-bone fatback kevin. Pork loin bacon rump venison, meatloaf salami doner pig pork belly chicken pancetta jowl leberkas t-bone. Porchetta andouille ham ball tip pork turducken tail pork chop fatback ground round doner t-bone.',
  ipsum: 'Leberkas spare ribs swine kevin turkey turducken landjaeger shoulder. Doner tongue bacon, drumstick alcatra beef pork loin swine frankfurter strip steak hamburger meatball. Turducken prosciutto shoulder sausage pastrami pig ham hock, beef ribeye tongue short ribs tri-tip ground round. Turducken brisket sausage prosciutto landjaeger, hamburger drumstick filet mignon ball tip sirloin jerky. Brisket venison hamburger jerky spare ribs, ribeye chicken bacon pig. Tenderloin tail swine cow pastrami tri-tip. Beef ribs meatloaf andouille pork loin ham tail beef, kielbasa alcatra swine tongue hamburger jerky sausage pork belly.',
}
