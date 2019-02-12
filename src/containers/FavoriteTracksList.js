import { connect } from 'react-redux';
import List from '../components/List';
import {
  getFavoriteTracks,
  getMoreFavoriteTracks,
} from '../actions/favoriteTracks';
import {
  addRecommendationTrackSeed,
  removeRecommendationTrackSeed
} from '../actions/recommendedTracks';

const mapStateToProps = ({favoriteTracks}) => ({
  items: favoriteTracks.items.map((items) => {
    return {
      title: items.name,
      subtitle: items.artists.length > 0
        ?items.artists[0].name
      :"Unknown",
      id: items.id,
      images: items.album.images};
  }),
  hasNext: !!favoriteTracks.next,
  loadProps: favoriteTracks
});

const mapDispatchToProps = dispatch => ({
  load: ({next = null}) => dispatch(getFavoriteTracks(next)),
  loadMore: ({next = null}) => dispatch(getMoreFavoriteTracks(next)),
  selectItem: (item) => dispatch(addRecommendationTrackSeed(item.id)),
  unselectItem: (item) => dispatch(removeRecommendationTrackSeed(item.id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
