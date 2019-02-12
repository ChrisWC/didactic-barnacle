import { connect } from 'react-redux';
import List from '../components/List';
import { getRecommendedTracks, getMoreRecommendedTracks } from '../actions/recommendedTracks';

const mapStateToProps = ({recommendedTracks, ...state}) => ({
  items: recommendedTracks.items.map((item) => {
    return {
      title: item.name,
      subtitle: item.artists.length > 0
        ?item.artists[0].name
        :"Unknown",
      id: item.id,
      images: item.album.images
    };
  }),
  // I don't really like this I would prefer to just have this in mapDispatchToProps
  loadProps: recommendedTracks,
  shouldUpdate: recommendedTracks.shouldUpdate,
  hasNext: !!recommendedTracks.next
});

const mapDispatchToProps = dispatch => ({
  load: ({tracks}) => dispatch(getRecommendedTracks(tracks)),
  loadMore: ({next}) => dispatch(getMoreRecommendedTracks(next))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
