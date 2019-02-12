import { connect } from 'react-redux';
import List from '../components/List';
import { getTopTracks, getMoreTopTracks } from '../actions/topTracks';
import {
  addRecommendationTrackSeed,
  removeRecommendationTrackSeed
} from '../actions/recommendedTracks';

const mapStateToProps = ({topTracks}) => ({
  items: topTracks.items.map((item) => {
    return {
      title: item.name,
      subtitle: item.artists.length > 0
        ?item.artists[0].name
        :"Unknown",
      id: item.id,
      images: item.album.images
    };
  }),
  hasNext: !!topTracks.next,
  loadProps: topTracks
});

const mapDispatchToProps = dispatch => ({
  load: () => dispatch(getTopTracks()),
  loadMore: ({next = null}) => dispatch(getMoreTopTracks(next)),
  selectItem: (item) => dispatch(addRecommendationTrackSeed(item.id)),
  unselectItem: (item) => dispatch(removeRecommendationTrackSeed(item.id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
