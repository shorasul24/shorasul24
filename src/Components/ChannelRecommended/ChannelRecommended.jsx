import './ChannelRecommended.scss';

import RecommendedChannelUser1 from '../../Assets/Images/recommended_user1.png';
import RecommendedChannelUser2 from '../../Assets/Images/recommended_user2.png';
import RecommendedChannelUser3 from '../../Assets/Images/recommended_user3.png';

function ChannelRecommended() {
	return (
		<>
			<div className='channel-recommended'>
				<h4 className='channel-recommended__heading'>
					Recommended channel
				</h4>

				<ul className='channel-recommended__users'>
					<li className='channel-recommended__user'>
						<img
							src={RecommendedChannelUser1}
							alt='Recommended user img'
							width='50'
							height='50'
						/>

						<strong className='channel-recommended__user-name'>
							Flora Benson
						</strong>
					</li>

					<li className='channel-recommended__user'>
						<img
							src={RecommendedChannelUser2}
							alt='Recommended user img'
							width='50'
							height='50'
						/>

						<strong className='channel-recommended__user-name'>
							Violet Cobb
						</strong>
					</li>

					<li className='channel-recommended__user'>
						<img
							src={RecommendedChannelUser3}
							alt='Recommended user img'
							width='50'
							height='50'
						/>

						<strong className='channel-recommended__user-name'>
							Phillip Mullins
						</strong>
					</li>
				</ul>
			</div>
		</>
	);
}

export default ChannelRecommended;
