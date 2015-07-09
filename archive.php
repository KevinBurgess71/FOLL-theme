<?php
/**
 * The template for displaying archive pages.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package foll
 */

get_header(); ?>

<div class="wrap foll-content">
	
		<?php if ( have_posts() ) : ?>

		<div class="innerWrap">
			<div class="col-2-3">				
				<div class="main-content">

					<header class="page-header">
						<?php
							the_archive_title( '<h1 class="page-title">', '</h1>' );
							the_archive_description( '<div class="taxonomy-description">', '</div>' );
						?>
					</header><!-- .page-header -->

					<?php /* Start the Loop */ ?>
					<?php while ( have_posts() ) : the_post(); ?>

					<?php
						/* Include the Post-Format-specific template for the content.
						 * If you want to override this in a child theme, then include a file
						 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
						 */
						get_template_part( 'content', get_post_format() );
					?>

				<?php endwhile; ?>

				<?php // the_posts_navigation(); ?>
				<?php foll_paging_nav(); ?>

				<?php else : ?>

				<?php get_template_part( 'content', 'none' ); ?>

				<?php endif; ?>



				</div>

			</div>

			<div class="col-1-3">
				<?php include "inc/inc-sidebar.php"; ?>
			</div>
			
		</div><!-- .innerWrap -->

	</div><!-- .wrap -->		
	

<?php // get_sidebar(); ?>
<?php get_footer(); ?>
