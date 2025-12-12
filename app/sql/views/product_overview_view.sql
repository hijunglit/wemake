CREATE OR REPLACE VIEW product_overview_view AS 
SELECT 
    product_id,
    name,
    tagline,
    description,
    how_it_works,
    icon,
    url,
    -- jsonb field 안에 있는 것을은 single quote 표기
    stats ->> 'upvotes' AS upvotes,
    stats ->> 'views' AS views,
    stats ->> 'reviews' AS reviews,
    AVG(product_reviews.rating) AS avg_rating
FROM public.products
LEFT JOIN public.reviews AS product_reviews USING (product_id)
GROUP BY product_id;