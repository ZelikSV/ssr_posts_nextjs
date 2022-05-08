import Link from 'next/link';
import faker from '@faker-js/faker';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import ShareIcon from '@mui/icons-material/Share';
import Typography from '@mui/material/Typography';

import { IPost } from '../../types/models';

type Props = {
  post: IPost;
};

function PostCard({ post }: Props) {
  return (
    <Card>
      <CardMedia component="img" height="200" image={faker.image.imageUrl(300, 200)} alt="green iguana" />
      <CardContent>
        <Box maxWidth="50%" textOverflow="ellipsis" overflow="hidden">
          <Typography gutterBottom variant="h5" component="p" noWrap>
            {post.title}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {`${post.body.slice(0, 150)}...`}
        </Typography>
        <IconButton aria-label="add to liked">
          {post.isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          <Typography color="text.secondary">{faker.datatype.number({ min: 12, max: 220 })}</Typography>
        </IconButton>
        <IconButton aria-label="add to favorites">
          {post.isFavorites ? <StarIcon /> : <StarBorderIcon />}
          <Typography color="text.secondary">{faker.datatype.number({ min: 32, max: 280 })}</Typography>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardContent>
      <CardActions>
        <Button variant="contained">
          <Link href="post/[id]" as={`post/${post.id}`}>
            See More
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default PostCard;
