
import React from 'react'
import { TweetButton, GithubButton, CarbonAd } from 'blk'

class Social extends React.Component {

  render () {
    return (
      <div className='flex flex-wrap flex-center'>
        <div className='flex flex-center py2'>
          <TweetButton text={this.props.description} />
          <div style={{ width: 16 }} />
          <GithubButton
            user='jxnblk'
            repo='rgx' />
        </div>
        <div className='flex-auto' />
        <div>
          <CarbonAd />
        </div>
      </div>
    )
  }
}

export default Social

